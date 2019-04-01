using System.Web.Http;
using WebActivatorEx;
using ControlESports.WebApi;
using Swashbuckle.Application;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace ControlESports.WebApi
{
  public class SwaggerConfig
  {
    public static void Register()
    {
      var thisAssembly = typeof(SwaggerConfig).Assembly;

      GlobalConfiguration.Configuration
          .EnableSwagger(c => { c.SingleApiVersion("v1", "ControlESports.WebApi"); }).EnableSwaggerUi(c => { });
    }
  }
}
