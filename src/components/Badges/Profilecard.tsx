export default function ProfileCard({ profile }: IProps) {
  const numberOfBadges = profile.badges.length;

  return (
    <article className="profile-card">
      <header>
        <img alt={profile.imageAlt} src={profile.imageSrc} />

        <h2>{profile.name}</h2>
        <p className="joined">Joined {profile.joinDate}</p>
      </header>

      {numberOfBadges > 0 && (
        <ul className={numberOfBadges < 3 ? 'badge-list' : 'golden badge-list'}>
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
