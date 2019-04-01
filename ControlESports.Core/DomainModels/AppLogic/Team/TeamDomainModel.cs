using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Team
{
  public class TeamDomainModel
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int GameId { get; set; }
    public Guid CreatedById { get; set; }
    public bool IsActive { get; set; }
    public byte[] ImageData { get; set; }
  }
}
