import useImage from "../../hooks/useImage";
import CarrierStub from "../../images/airplane-stub.svg";

interface CarrierLogoProps {
  carrier: string;
}

export const CarrierLogo = ({ carrier }: CarrierLogoProps) => {
  const imageUrl = `https://pics.avs.io/99/36/${carrier}.png`;

  const { hasLoaded, hasError } = useImage(imageUrl);

  return (
    <>
      {hasError && (
        <img src={CarrierStub} width="110" height="36" alt="airline logo" />
      )}
      {hasLoaded && (
        <img src={imageUrl} width="110" height="36" alt="airline logo" />
      )}
    </>
  );
};
