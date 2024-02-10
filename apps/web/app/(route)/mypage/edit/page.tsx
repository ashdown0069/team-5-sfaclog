import { auth } from '@/auth';
import NotFound from '@/not-found';
import ProfileEditForm from './ProfileEditForm/ProfileEditForm';

async function fetchData(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`,
  );
  if (!response.ok) return null;
  return response.json();
}

async function page() {
  const session = await auth();
  if (!session) return NotFound();

  const profile = await fetchData(session?.user.id);
  if (!profile) return NotFound();

  return (
    <div>
      <ProfileEditForm profile={profile} />
    </div>
  );
}

export default page;
