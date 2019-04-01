using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Team
{
  public class TeamMemberDomainModel
  {
    public Guid TeamId { get; set; }
    public Guid UserId { get; set; }
    public List<int> TeamRole { get; set; }
    public string CreatedById { get; set; }
  }
}
