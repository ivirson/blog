# Back-End Project

This project was developed with [.NET Core](https://docs.microsoft.com/pt-br/dotnet/core/whats-new/dotnet-core-3-1) version 3.1.

## Development server

On [Visual Studio](https://visualstudio.microsoft.com/pt-br/):

  - Run `dotnet ef migrations add 'Initial' --Project Blog.API` for create a Initial Migration. 

  - Run `dotnet ef database update --Project Blog.API` for generate the SQL Server Database. 

## Build

Click the "IIS Express" button on the top of Visual Studio to run the Web API.

## Swagger

When the application is running:

- [Swagger JSON URL](https://localhost:44343/swagger/v1/swagger.json)

- [Swagger Doccumentation URL](https://localhost:44343/swagger)
