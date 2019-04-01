using ControlESports.Core.Interfaces.Helpers;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Helpers
{
  public class CompressionHelper : ICompressionHelper
  {
    public byte[] CompressImageSize(double scaleFactor, Stream sourcePath)
    {
      using (var image = Image.FromStream(sourcePath))
      {
        var newWidth = (int)(image.Width * scaleFactor);
        var newHeight = (int)(image.Height * scaleFactor);
        var thumbnailImg = new Bitmap(newWidth, newHeight);
        var thumbGraph = Graphics.FromImage(thumbnailImg);
        thumbGraph.CompositingQuality = CompositingQuality.HighQuality;
        thumbGraph.SmoothingMode = SmoothingMode.HighQuality;
        thumbGraph.InterpolationMode = InterpolationMode.HighQualityBicubic;
        var imageRectangle = new Rectangle(0, 0, newWidth, newHeight);
        thumbGraph.DrawImage(image, imageRectangle);
        using (MemoryStream ms = new MemoryStream())
        {
          thumbnailImg.Save(ms, image.RawFormat);
          return ms.ToArray();
        }
      }
    }
  }
}
