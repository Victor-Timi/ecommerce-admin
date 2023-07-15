"use client";

import Modal from "@/components/ui/modal";
import useStoreModal from "@/hooks/use-store-modal";

const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title="Create Store"
      description="Add a new store to manage products and categories"
    >
      Future create store form
    </Modal>
  );
};

export default StoreModal;
