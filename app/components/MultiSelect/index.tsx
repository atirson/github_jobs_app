/* eslint-disable react-native/no-inline-styles */
import React, {useState, memo} from 'react';
import MultiSelect from 'react-native-multiple-select';
import {theme} from '@cuteapp/constants/theme';
import {View} from 'react-native';

interface MultiSelectProps {
  items: any[];
  uniqueKey: string;
  selectText: string;
  searchInputPlaceholderText: string;
  displayKey: string;
}

const MultiSelectElement = ({
  items,
  uniqueKey,
  displayKey,
  searchInputPlaceholderText,
  selectText,
}: MultiSelectProps) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  function onSelectedItemsChange(value: any[]) {
    setSelectedItems(value);
  }

  return (
    <View style={{marginTop: 20}}>
      <MultiSelect
        hideTags={false}
        items={items}
        uniqueKey={uniqueKey}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText={selectText}
        searchInputPlaceholderText={searchInputPlaceholderText}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#fff"
        tagBorderColor="#fff"
        tagTextColor="#fff"
        selectedItemTextColor="#fff"
        selectedItemIconColor="#fff"
        itemTextColor="#fff"
        displayKey={displayKey}
        searchInputStyle={{
          color: '#CCC',
          borderRadius: 16,
          backgroundColor: theme.colors.secondary,
        }}
        styleTextDropdownSelected={{
          color: '#fff',
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: theme.colors.secondary,
        }}
        styleTextDropdown={{
          color: '#FFF',
          marginLeft: 10,
          backgroundColor: theme.colors.secondary,
        }}
        styleInputGroup={[
          {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingRight: 15,
            backgroundColor: theme.colors.secondary,
          },
        ]}
        styleDropdownMenu={{
          borderRadius: 16,
          height: 48,
          backgroundColor: theme.colors.secondary,
        }}
        styleDropdownMenuSubsection={{
          borderRadius: 16,
          backgroundColor: theme.colors.secondary,
          borderColor: theme.colors.secondary,
        }}
        styleListContainer={{
          backgroundColor: theme.colors.secondary,
        }}
        hideSubmitButton
        noItemsText="Nenhum item encontrado"
      />
    </View>
  );
};

export const MultiSelectComponent = memo(
  MultiSelectElement,
  (prevProps, nextProps) => {
    return Object.is(prevProps.items, nextProps.items);
  },
);
