param(
  [Parameter(Mandatory = $true)]
  [string]$Otp
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Building @nehal712521/inprogress..." -ForegroundColor Cyan
npm run build

Write-Host "Publishing (OTP used immediately after build)..." -ForegroundColor Cyan
npm publish --access public --otp=$Otp --ignore-scripts

Write-Host "Done. Check: npm view @nehal712521/inprogress version" -ForegroundColor Green
