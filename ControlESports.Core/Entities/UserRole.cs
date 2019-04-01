namespace ControlESports.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserRole")]
    public partial class UserRole
    {
        public int Id { get; set; }

        public Guid UserId { get; set; }

        public int RoleId { get; set; }

        public DateTime CreatedDate { get; set; }

        public virtual Role Role { get; set; }

        public virtual User User { get; set; }
    }
}
