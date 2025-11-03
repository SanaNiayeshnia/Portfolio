"use client";
import { Button } from "@/app/_components/ui/buttonn";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import { useGlobalContext } from "@/app/_contexts/GlobalContextProvider";

export default function CustomModal() {
  const { modal, setModal } = useGlobalContext();

  function onOpenChange() {
    setModal((modal) => ({ open: !modal?.open }));
  }

  return (
    <Dialog open={modal?.open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px] border-2">
          <DialogHeader>
            <DialogTitle>{modal?.title}</DialogTitle>
            <DialogDescription>{modal?.subtitle}</DialogDescription>
          </DialogHeader>
          {modal?.content}
          <DialogFooter>
            {modal?.cancel && (
              <DialogClose asChild>
                <Button
                  aria-label="cancel"
                  variant="outline"
                  onClick={modal?.cancel?.handler}
                  className="cursor-pointer"
                >
                  {modal?.cancel?.text || "Cancel"}
                </Button>
              </DialogClose>
            )}
            {modal?.submit && (
              <Button
                aria-label="submit"
                type="submit"
                onClick={modal?.submit?.handler}
                className="cursor-pointer"
              >
                {modal?.submit?.text || "Save changes"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
