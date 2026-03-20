$files = Get-ChildItem -Path "src" -Recurse -File -Include "*.markdoc", "*.svelte", "*.ts", "*.md", "*.json", "*.scss"
foreach ($file in $files) {
    try {
        if ($file.FullName -like "*node_modules*" -or $file.FullName -like "*dist*" -or $file.FullName -like "*.svelte-kit*") {
            continue
        }
        $content = [System.IO.File]::ReadAllText($file.FullName)
        $changed = $false
        
        $reversions = @(
            @{ find = '@indobase.io'; replace = '@appwrite.io' },
            @{ find = 'indobase-network'; replace = 'appwrite-network' },
            @{ find = '$lib/indobase'; replace = '$lib/appwrite' },
            @{ find = 'io.indobase'; replace = 'io.appwrite' },
            @{ find = 'package:indobase'; replace = 'package:appwrite' },
            @{ find = 'client-indobase'; replace = 'client-appwrite' },
            @{ find = 'server-indobase'; replace = 'server-appwrite' },
            @{ find = '"indobase"'; replace = '"appwrite"' },
            @{ find = "'indobase'"; replace = "'appwrite'" },
            @{ find = 'node-indobase'; replace = 'node-appwrite' },
            @{ find = 'dart_indobase'; replace = 'dart_appwrite' }
        )

        foreach ($rev in $reversions) {
            if ($content -cmatch [regex]::Escape($rev.find)) {
                $content = $content -creplace [regex]::Escape($rev.find), $rev.replace
                $changed = $true
            }
        }

        if ($changed) {
            [System.IO.File]::WriteAllText($file.FullName, $content)
            Write-Host "Reverted technical paths in: $($file.FullName)"
        }
    } catch {
        Write-Warning "Failed to process: $($file.FullName)"
    }
}
