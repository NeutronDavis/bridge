# Bridge Dynamics Website

Public enterprise marketing website for Bridge Dynamics, developed by Southbridge Technologies.

## Technology

- .NET 10 and ASP.NET Core Razor Pages
- Bootstrap 5, served locally
- Minimal JavaScript
- xUnit integration and validation tests

## Run locally

```powershell
dotnet restore .\BridgeDynamics.Website.slnx
dotnet run --project .\src\BridgeDynamics.Website
```

## Validate

```powershell
dotnet build .\BridgeDynamics.Website.slnx
dotnet test .\BridgeDynamics.Website.slnx --no-build
```

## Lead handling

The prototype uses `IDemoRequestService` and `IContactRequestService` development implementations that deliberately do not persist or log personal information. A production lead destination must be selected and implemented before launch. The website has no dependency on the Bridge Dynamics product database.

## Production review

Before publication, approve final legal copy, lead handling and retention, hosting configuration, analytics choices, public contact details, structured organisation data and any resource-download workflow.
