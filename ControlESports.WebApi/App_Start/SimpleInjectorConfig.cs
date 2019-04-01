using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using ControlESports.Infrastructure.DbContext;
using ControlESports.Infrastructure.Repositories;
using Owin;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ControlESports.WebApi.App_Start
{
  public class SimpleInjectorConfig
  {
    private static Container container;
    public static Container Configure(IAppBuilder app)
    {
      container = new Container();
      container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

      container.RegisterInstance(app);
      container.Register(() => new ControlESportsEntities(),Lifestyle.Scoped);

      InitializeContainer(container);
      return container;
    }

    public static void FinalBootstraping()
    {
      container.Verify();
      GlobalConfiguration.Configuration.DependencyResolver =
        new SimpleInjectorWebApiDependencyResolver(container);
    }

    private static void InitializeContainer(Container container)
    {
      InitializeRepositories(container);
      InitializeServices(container);
      InitializeHelpers(container);
    }

    private static void InitializeRepositories(Container container)
    {
      container.Register<IBlogCommentRepository, BlogCommentRepository>(Lifestyle.Scoped);
      container.Register<IBlogRepository, BlogRepository>(Lifestyle.Scoped);
      container.Register<ICountryRepository, CountryRepository>(Lifestyle.Scoped);
      container.Register<IGameRepository, GameRepository>(Lifestyle.Scoped);
      container.Register<IImageRepository, ImageRepository>(Lifestyle.Scoped);
      container.Register<IRoleRepository, RoleRepository>(Lifestyle.Scoped);
      container.Register<ITeamAchievementRepository, TeamAchievementRepository>(Lifestyle.Scoped);
      container.Register<ITeamMemberRepository, TeamMemberRepository>(Lifestyle.Scoped);
      container.Register<ITeamRepository, TeamRepository>(Lifestyle.Scoped);
      container.Register<ITeamRoleRepository, TeamRoleRepository>(Lifestyle.Scoped);
      container.Register<IUserRepository, UserRepository>(Lifestyle.Scoped);
      container.Register<IUserRoleRepository, UserRoleRepository>(Lifestyle.Scoped);
    }

    private static void InitializeServices(Container container)
    {
      //container.Register<IAccountManagementService, AccountManagementService>(Lifestyle.Scoped);
      //container.Register<ICurrentUserCacheService, CurrentUserCacheService>(Lifestyle.Scoped);
      //container.Register<IUserManagementService, UserManagementService>(Lifestyle.Scoped);
      //container.Register<ICustomerAccountService, CustomerAccountService>(Lifestyle.Scoped);
      //container.Register<IInvitationService, InvitationService>(Lifestyle.Scoped);
      //container.Register<IERPInterfaceLogService, ERPInterfaceLogService>(Lifestyle.Scoped);
      //container.Register<IUserLoginLogService, UserLoginLogService>(Lifestyle.Scoped);
      //container.Register<ITenderDataService, TenderDataService>(Lifestyle.Scoped);
      //container.Register<IElmahErrorService, ElmahErrorService>(Lifestyle.Scoped);
      //container.Register<IAccessLogService, AccessLogService>(Lifestyle.Scoped);
      //container.Register<IImageService, ImageService>(Lifestyle.Scoped);
    }

    private static void InitializeHelpers(Container container)
    {
      //container.Register<IDateTimeHelper, DateTimeHelper>(Lifestyle.Scoped);
      //container.Register<ICryptographyHelper, CryptographyHelper>(Lifestyle.Scoped);
      //container.Register<IEmailHelper, EmailHelper>(Lifestyle.Scoped);
      //container.Register<IPassswordValidatorHelper, PassswordValidatorHelper>(Lifestyle.Scoped);
      //container.Register(() => new SmtpClient()
      //{
      //  //Credentials = new NetworkCredential("apikey", "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"),
      //  //Port = 587,
      //  //Host = "smtp.sendgrid.net",
      //  //EnableSsl = true,
      //}, Lifestyle.Scoped);
      //container.Register<IPfizerOneWebConfiguration>(() => ConfigurationManager.GetSection("PfizerOne/PfizerOneWeb") as PfizerOneWebConfiguration, Lifestyle.Singleton);
    }
  }
}