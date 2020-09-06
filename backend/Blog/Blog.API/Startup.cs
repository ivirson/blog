using Blog.API.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.PlatformAbstractions;
using System.IO;

namespace Blog.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(x =>
                   x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();

            // Configurando o serviço de documentação do Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new Microsoft.OpenApi.Models.OpenApiInfo
                    {
                        Title = "Blog",
                        Version = "v1",
                        Description = "API REST criada com o ASP.NET Core para o projeto de um Blog",
                        Contact = new Microsoft.OpenApi.Models.OpenApiContact
                        {
                            Name = "Ivirson Daltro",
                            Url = new System.Uri("https://github.com/ivirson")
                        }
                    });

                string applicationPath =
                    PlatformServices.Default.Application.ApplicationBasePath;
                string applicationName =
                    PlatformServices.Default.Application.ApplicationName;
                string xmlDocPath =
                    Path.Combine(applicationPath, $"{applicationName}.xml");

                c.IncludeXmlComments(xmlDocPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json",
                    "Blog");
            });
        }
    }
}
