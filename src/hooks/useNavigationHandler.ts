import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { ParamValue } from 'next/dist/server/request/params';

export const useNavigationHandler = (funnelSlug: ParamValue) => {
  const router = useRouter();

  const handleNext = (nextId: string) => {
    router.push(nextId === ROUTES.RESULTS ? `/${ROUTES.RESULTS}` : `/${funnelSlug}/${nextId}`);
  };

  return { handleNext };
};
