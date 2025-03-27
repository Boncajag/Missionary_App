using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionaryController : ControllerBase
    {
        private readonly MissionaryAppContext _context;

        public MissionaryController(MissionaryAppContext context)
        {
            _context = context;
        }

        [HttpGet("allData")]
        public IActionResult GetAllData()
        {
            var users = _context.users.ToList();
            var posts = _context.posts.ToList();
            var replies = _context.replies.ToList();

            return Ok(new { users, posts, replies });
        }

        // Search missionaries by first name, last name, mission, or home city
        [HttpGet("search")]
        public async Task<IActionResult> SearchMissionaries(
            [FromQuery] string? first_name, 
            [FromQuery] string? last_name, 
            [FromQuery] string? mission, 
            [FromQuery] string? home_city)
        {
            var query = _context.users.AsQueryable();

            if (!string.IsNullOrEmpty(first_name))
                query = query.Where(m => m.first_name.ToLower().Contains(first_name.ToLower()));

            if (!string.IsNullOrEmpty(last_name))
                query = query.Where(m => m.last_name.ToLower().Contains(last_name.ToLower()));

            if (!string.IsNullOrEmpty(mission))
                query = query.Where(m => m.mission.ToLower().Contains(mission.ToLower()));

            if (!string.IsNullOrEmpty(home_city))
                query = query.Where(m => m.home_city.ToLower().Contains(home_city.ToLower()));

            var results = await query.ToListAsync();

            if (results == null || results.Count == 0)
                return Ok(new List<User>()); // Return empty list instead of NotFound

            return Ok(results);
        }
    }

    // --- This closes MissionaryController. PostsController starts below ---

    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly MissionaryAppContext _context;

        public PostsController(MissionaryAppContext context)
        {
            _context = context;
        }

        [HttpPost("CreateAPost")]
        public async Task<IActionResult> CreatePost([FromBody] Post post)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            post.created_at = DateTime.UtcNow;

            _context.posts.Add(post);
            await _context.SaveChangesAsync();

            return Ok(post);
        }
    }
}
