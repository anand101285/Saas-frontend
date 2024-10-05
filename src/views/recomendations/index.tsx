import { getProviders } from 'appRedux/actions/addOnAction';
import { AddOnSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import UserCard from 'components/userCard/index.tsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * A simple component that displays a card with the easy audit heading.
 *
 * @returns A JSX element representing a card with the easy audit heading.
 */
const Recomendations = () => {
  const dispatch = useAppDispatch();
  const { providers, providerLoading } = useSelector(AddOnSelector);
  useEffect(() => {
    if (!providers && providerLoading) {
      dispatch(getProviders());
    }
  }, [providers]);
  console.log(providers);
  return (
    <div className="container ">
      <h1 className="text-2xl my-4">Recommendations</h1>
      <div className="bg-tertiary  p-8 rounded-lg">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {providers?.map((provider, index) => {
            return (
              <div key={index}>
                <UserCard data={provider} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recomendations;