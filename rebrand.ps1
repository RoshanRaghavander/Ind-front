$files = Get-ChildItem -Path "src" -Recurse -File -Include "*.markdoc", "*.svelte", "*.ts", "*.md", "*.json", "*.scss"
foreach ($file in $files) {
    try {
        if ($file.FullName -like "*node_modules*" -or $file.FullName -like "*dist*" -or $file.FullName -like "*.svelte-kit*") {
            continue
        }
        $content = [System.IO.File]::ReadAllText($file.FullName)
        $changed = $false
        if ($content -cmatch 'Appwrite') {
            $content = $content -creplace 'Appwrite', 'Indobase'
            $changed = $true
        }
        if ($content -cmatch 'appwrite') {
            $content = $content -creplace 'appwrite', 'indobase'
            $changed = $true
        }
        if ($changed) {
            [System.IO.File]::WriteAllText($file.FullName, $content)
            Write-Host "Rebranded: $($file.FullName)"
        }
    } catch {
        Write-Warning "Failed to process: $($file.FullName)"
    }
}
