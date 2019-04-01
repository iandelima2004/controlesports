using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Helpers
{
  public interface ICryptographyHelper
  {
    string Encrypt(string plainText, string passPhrase, string saltValue);

    string Decrypt(string cipherText, string passPhrase, string saltValue);

    byte[] EncodePassword(string plainPassword, byte[] initVector);

    byte[] GenerateInitVector();

    bool IsValidPassword(string plainPassword, byte[] encodedPassword, byte[] initVector);

    string GenerateRandomPassword();
  }
}
