// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

export default function ProfileCard({ profile }: IProps) {
  console.log(profile.badges);

  return (
    <article className="profile-card">
      <header>
        <img alt={profile.imageAlt} src={profile.imageSrc} />

        <h2>{profile.name}</h2>
        <p className="joined">Joined {profile.joinDate}</p>
      </header>

      {profile.badges.length > 0 && (
        <ul className={profile.badges.length < 3 ? 'badge-list' : 'golden badge-list'}>
          {profile.badges.map((badge) => (
            <li key={badge.slug}>{badge.label}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

type IProps = {
  profile: {
    id: string;
    imageSrc: string;
    imageAlt: string;
    name: string;
    joinDate: string;
    badges: {
      slug: string;
      label: string;
    }[];
  };
};
