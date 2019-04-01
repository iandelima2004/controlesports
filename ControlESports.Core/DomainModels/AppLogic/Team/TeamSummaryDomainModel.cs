using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Team
{
  public class TeamSummaryDomainModel
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string GameName { get; set; }
    public int MemberCount { get; set; }
    public int TotalMatches { get; set; }
    public DateTime CreatedDate { get; set; }
  }
}
