using AutoMapper;
using ControlESports.Core.DomainModels.AppLogic.Blog;
using ControlESports.Core.DomainModels.AppLogic.Team;
using ControlESports.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Configurations.AutoMap
{
  public class EntitiesToDomainMapping : Profile
  {
    public EntitiesToDomainMapping()
    {
      CreateMap<Team, TeamSummaryDomainModel>()
         .ForMember(a => a.GameName, b => b.MapFrom(c => c.Game.Name))
         .ForMember(a => a.MemberCount, b => b.MapFrom(c => c.TeamMembers.Count));

      CreateMap<Blog, BlogInfoDomainModel>()
        .ForMember(a => a.CommentCount, b => b.MapFrom(c => c.BlogComments.Count));
    }
  }
}
