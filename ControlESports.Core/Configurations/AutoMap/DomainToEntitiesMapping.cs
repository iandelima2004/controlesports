using AutoMapper;
using ControlESports.Core.DomainModels.AppLogic.Blog;
using ControlESports.Core.DomainModels.AppLogic.Team;
using ControlESports.Core.DomainModels.Auth;
using ControlESports.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Configurations.AutoMap
{
  public class DomainToEntitiesMapping : Profile
  {
    public DomainToEntitiesMapping()
    {
      CreateMap<CreateAccountDomainModel, User>();

      CreateMap<TeamDomainModel, Team>()
        .ForMember(a => a.Id, b => b.MapFrom(c => Guid.NewGuid()))
        .ForMember(a => a.CreatedDate, b => b.MapFrom(c => DateTime.Now));

      CreateMap<TeamMemberDomainModel, TeamMember>()
        .ForMember(a => a.CreatedDate, b => b.MapFrom(c => DateTime.Now))
        .ForMember(a => a.TeamRole, b => b.MapFrom(c => string.Join(",", c.TeamRole)));

      CreateMap<UpsertBlogDomainModel, Blog>()
         .ForMember(a => a.Id, b => b.MapFrom(c => Guid.NewGuid()))
         .ForMember(a => a.CreatedDate, b => b.MapFrom(c => DateTime.Now));

      CreateMap<UpsertBlogCommentDomainModel, BlogComment>()
        .ForMember(a => a.CreatedDate, b => b.MapFrom(c => DateTime.Now));
    }
  }
}
