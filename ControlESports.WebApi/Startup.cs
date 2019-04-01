using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using ControlESports.WebApi.App_Start;

[assembly: OwinStartup(typeof(ControlESports.WebApi.Startup))]

namespace ControlESports.WebApi
{
  public partial class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      SimpleInjectorConfig.Configure(app);
      ConfigureAuth(app);
      SimpleInjectorConfig.FinalBootstraping();
    }
  }
}
