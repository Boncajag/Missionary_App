using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the controllers (this was missing)
builder.Services.AddControllers();

// Register DbContext for MissionaryAppContext
builder.Services.AddDbContext<MissionaryAppContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("MissionaryAppConnection")));

// Add CORS
builder.Services.AddCors();

// Add Authentication and Authorization services
builder.Services.AddAuthentication(); // Optional if you plan to implement authentication
builder.Services.AddAuthorization(); // Required for authorization

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

// Add Authentication and Authorization middleware
app.UseAuthentication(); // Add this line if you plan to use authentication
app.UseAuthorization();  // This is required for authorization

// Map the controllers (this was missing)
app.MapControllers();

app.Run();
