import useImage from '../../hooks/useImage'
import CarrierStub from '../../img/airplane-stub.svg'


export default function CarrierLogo ({carrier}) {

    const imageUrl = `https://pics.avs.io/99/36/${carrier}.png`;

    const { hasLoaded, hasError } = useImage(imageUrl);

    return (
        <>
            {hasError && <img src={CarrierStub} width="110" height="36" alt="airline logo"/>}
            {hasLoaded && <img src={imageUrl} width="110" height="36" alt="airline logo"/>}
        </>
    );
}