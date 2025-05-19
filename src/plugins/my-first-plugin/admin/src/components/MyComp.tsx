import { Button } from '@strapi/design-system';
import { Dialog } from '@strapi/design-system';
import { WarningCircle } from '@strapi/icons';


const MyComp = () => {

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="danger">Delete</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Confirmation</Dialog.Header>
        <Dialog.Body icon={<WarningCircle fill="danger600" />}>啥东西啊</Dialog.Body>
        <Dialog.Footer>
          <Dialog.Cancel>
            <Button fullWidth variant="tertiary">
              Cancel
            </Button>
          </Dialog.Cancel>
          <Dialog.Action>
            <Button fullWidth variant="danger-light">
              Yes, delete
            </Button>
          </Dialog.Action>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { MyComp };
