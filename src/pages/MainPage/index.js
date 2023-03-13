import { useDispatch, useSelector } from "react-redux";
import { setGridSizes } from "../../redux/modules/splitGrid/actions";
import SplitGrid from "../../components/SplitGrid";
import GridLocations from "./GridLocations";
import Table from "./Table";
import ContractList from "./ContractList";
import Content from "./Content";

const MainPage = () => {
  const { gridSizes } = useSelector((state) => state.splitGrid);
  const dispatch = useDispatch();

  const handleGridSize = (size) => {
    dispatch(setGridSizes(size));
  };

  return (
    <SplitGrid
      className="split-column"
      direction="vertical"
      cursor="row-resize"
      sizes={gridSizes.horizontalWindow}
      onDrag={(size) => handleGridSize({ horizontalWindow: size })}
    >
      <SplitGrid
        onDrag={(size) => handleGridSize({ topVerticalWindow: size })}
        sizes={gridSizes.topVerticalWindow}
      >
        <Table />
        <GridLocations />
      </SplitGrid>
      <SplitGrid
        onDrag={(size) => handleGridSize({ bottomVerticalWindow: size })}
        sizes={gridSizes.bottomVerticalWindow}
      >
        <ContractList />
        <Content />
      </SplitGrid>
    </SplitGrid>
  );
};

export default MainPage;
