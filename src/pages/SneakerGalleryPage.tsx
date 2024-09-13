import SneakerGallery from "containers/SneakerGallery";
import WithAppbar from "layouts/WithAppbar";

const SneakerGalleryPage = () => {
  return (
    <WithAppbar theme="light">
      <SneakerGallery />
    </WithAppbar>
  );
};

export default SneakerGalleryPage;
