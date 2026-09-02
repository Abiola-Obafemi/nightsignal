param([double]$MaxHours = 4)

$ErrorActionPreference = "Continue"
$Deadline = (Get-Date).AddHours($MaxHours)

# Temporarily prevent Windows sleep while this runner is active.
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public static class AboAwake {
    [DllImport("kernel32.dll")]
    public static extern uint SetThreadExecutionState(uint esFlags);
}
"@
$ES_CONTINUOUS = 0x80000000
$ES_SYSTEM_REQUIRED = 0x00000001
$null = [AboAwake]::SetThreadExecutionState($ES_CONTINUOUS -bor $ES_SYSTEM_REQUIRED)

try {
    $Models = @(
        "opencode/muse-spark-1.2-contributor-free",
        "opencode/mimo-v2.5-free",
        "opencode/nemotron-3.5-lightning-free",
        "opencode/nemotron-3-ultra-free"
    )

    $Tasks = Get-ChildItem ".\TASKS\*.md" | Sort-Object Name
    if (-not $Tasks) { throw "No TASKS/*.md files found." }

    Write-Host "ABO local OpenCode runner"
    Write-Host "Project: $(Split-Path -Leaf (Get-Location))"
    Write-Host "Deadline: $Deadline"
    Write-Host "Tasks: $($Tasks.Count)"

    foreach ($Task in $Tasks) {
        if ((Get-Date) -ge $Deadline) { break }

        $DoneMarker = "$($Task.FullName).done"
        if (Test-Path $DoneMarker) { continue }

        $Milestone = Get-Content -Raw $Task.FullName
        $Completed = $false

        foreach ($Model in $Models) {
            if ((Get-Date) -ge $Deadline) { break }

            $Prompt = "Work locally in this repository.`n`n" +
                "Complete ONLY this real engineering milestone:`n`n" +
                $Milestone +
                "`n`nRules:`n" +
                "- Inspect current code first.`n" +
                "- Implement the milestone completely.`n" +
                "- Run appropriate tests/builds.`n" +
                "- Inspect actual output where relevant.`n" +
                "- Fix failures you caused.`n" +
                "- Commit the completed milestone with a meaningful commit message.`n" +
                "- Never manipulate Hackatime, WakaTime, timestamps, or heartbeats.`n" +
                "- Never create filler or meaningless edits to consume time.`n" +
                "- Do not weaken tests just to pass.`n" +
                "- If the milestone is genuinely complete, create this marker at the end: $DoneMarker`n" +
                "- If blocked or incomplete, do not create the marker."

            Write-Host ""
            Write-Host "TASK: $($Task.Name)"
            Write-Host "MODEL: $Model"

            & opencode run --auto -m $Model $Prompt

            if (Test-Path $DoneMarker) {
                $Completed = $true
                Write-Host "COMPLETED: $($Task.Name)"
                break
            }

            Write-Warning "$Model ended before milestone completion. Trying next configured free model if time remains."
        }

        if (-not $Completed) {
            Write-Warning "Stopping queue because the current milestone is incomplete."
            break
        }
    }

    Write-Host ""
    git status --short
    git log --oneline -12
}
finally {
    # Release temporary keep-awake request.
    $null = [AboAwake]::SetThreadExecutionState($ES_CONTINUOUS)
    Write-Host "Runner finished; normal Windows sleep behavior restored."
}

