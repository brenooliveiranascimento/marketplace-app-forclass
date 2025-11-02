import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories";
import { useFilterStore } from "../../../../shared/store/use-filter-store";

export const useFilterViewModel = () => {
  const { data: productsCategory, isLoading } = useGetProductCategoriesQuery();

  const { updateFilter, filterState } = useFilterStore();

  const handleValueMaxChange = (value: number) => {
    updateFilter({ key: "valueMax", value });
  };

  const handleValueMinChange = (value: number) => {
    updateFilter({ key: "valueMin", value });
  };

  const handleCategoryToglle = (categoryId: number) => {
    const categoryAlredyInArray =
      filterState.selectedCategories.includes(categoryId);

    if (categoryAlredyInArray) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      });
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      });
    }
  };

  return {
    productsCategory,
    isLoading,
    handleCategoryToglle,
    handleValueMaxChange,
    handleValueMinChange,
    selectedCategories: filterState.selectedCategories,
  };
};
