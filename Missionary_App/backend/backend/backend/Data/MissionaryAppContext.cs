using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class MissionaryAppContext : DbContext
{
    public MissionaryAppContext(DbContextOptions<MissionaryAppContext> options) : base(options)
    {
        
    }
    public DbSet<User> users { get; set; }
    public DbSet<Post> posts { get; set; }
    public DbSet<Reply> replies { get; set; }
}