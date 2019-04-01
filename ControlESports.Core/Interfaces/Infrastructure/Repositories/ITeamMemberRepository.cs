﻿using ControlESports.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Infrastructure.Repositories
{
  public interface ITeamMemberRepository : IRepository<TeamMember>
  {
    TeamMember GetCurrentTeamMemberByTeamAndUserId(Guid teamId, Guid userId);
  }
}
