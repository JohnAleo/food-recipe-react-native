import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useRef } from "react"


type FilterBottomSheetProps = {
    bottomSheetRef: React.RefObject<BottomSheetModal>;
};

export const FilterBottomSheet = ({bottomSheetRef}: FilterBottomSheetProps) => {
  console.log();
    return (
    <BottomSheetModal ref={bottomSheetRef} snapPoints={["50%"]} children={undefined}></BottomSheetModal>
  )
}
