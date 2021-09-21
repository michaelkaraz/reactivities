namespace Application.Activities
{
    public class AttendeeDto
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Bio { get; set; }
        public string Image { get; set; }

        public bool Following { get; set; } //to show the current user if his following a particular user when viewing the profile of that user
        public int FollowersCount { get; set; }
        public int FollowingCount { get; set; }
    }
}