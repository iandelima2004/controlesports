namespace ControlESports.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Blog")]
    public partial class Blog
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Blog()
        {
            BlogComments = new HashSet<BlogComment>();
        }

        public Guid Id { get; set; }

        public int GameId { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Post { get; set; }

        public Guid? HeaderImage { get; set; }

        public Guid? FooterImage { get; set; }

        public DateTime CreatedDate { get; set; }

        public Guid CreatedById { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public virtual Game Game { get; set; }

        public virtual Image Image { get; set; }

        public virtual Image Image1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BlogComment> BlogComments { get; set; }
    }
}
