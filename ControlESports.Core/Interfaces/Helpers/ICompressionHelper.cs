using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Helpers
{
  public interface ICompressionHelper
  {
    byte[] CompressImageSize(double scaleFactor, Stream sourcePath);
  }
}
