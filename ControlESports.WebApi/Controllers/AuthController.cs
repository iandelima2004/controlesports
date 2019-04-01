using ControlESports.Core.Interfaces.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ControlESports.WebApi.Controllers
{
  public class AuthController : ApiController
  {
    private readonly IAccountModule _accountModule;

    public AuthController(IAccountModule accountModule)
    {
      _accountModule = accountModule;
    }


  }
}
