export const componentData = {
  htmlStructure: `
    <div class="select">
      <div id="multiselect-input" class="selectInputWrapper border-animation">
        <div class="selected-options selectedInput">
          <div class="selected" aria-label="Lorem">
            <div>
              <span>Lorem</span>
              <div class="close" />
            </div>
          </div>
        </div>
        <div class="arrow up"/>
      </div>
      <div id="dropdown-options" class="menu show">
        <span class="option selected-option">
          <span>Lorem</span>
        </span>
        <span class="option">
          <span>Ipsum</span>
        </span>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Additional class(es) for custom styling. These classes will be added along with library specific styles',
    },
    {
      prop: 'options',
      type: 'Array',
      defaultValue: '',
      description: 'Array of objects to display options (Required) .',
    },
    {
      prop: 'onSelect',
      type: 'Function',
      defaultValue: '',
      description: 'Callback when an option is selected.',
    },
  ],  
  themesData: [
    {
      name: 'select',
      description: 'Class used for the wrapper component.',
    },
    {
      name: 'menu',
      description: 'Class used for the dropdown menu.',
    },
    {
      name: 'option',
      description: 'Class used for dropdown items.',
    },
    {
      name: 'selectedInput',
      description: 'Class used for wrapper container of selected items.',
    },
    {
      name: 'selectInputWrapper',
      description: 'Class used for the wrapper container multiselect component ( Note: Multiselect dropdown menu is not wrapped by this wrapper element. ).',
    },
    {
      name: 'selected',
      description: 'Class for selected chip items.',
    },
    {
      name: 'selected-option',
      description: 'Class for selected options in the dropdown menu.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        const options = [
            { label: 'Lorem' }, 
            { label: 'Ipsum'}, 
            { label: 'Dolor' },
            { label: 'Sit' },
            { label: 'Amet' },
            { label: 'Consectetur' },
            { label: 'Adipiscing' }
        ];
        return (
          <div>
              <MultiSelect
                options={options}
              />
          </div>
        )
      }
    }
  `,
  componentUsage: `
    //  Component.js

    class Demo extends React.Component {
      render() {
        const options = [
            { label: 'Lorem' }, 
            { label: 'Ipsum'}, 
            { label: 'Dolor' },
            { label: 'Sit' },
            { label: 'Amet' },
            { label: 'Consectetur' },
            { label: 'Adipiscing' }
        ];
        return (
          <PreviewElements>
            <PreviewBlock header="default multiselect">

            {/* Default Multiselect Component */}
              <MultiSelect
                options={options}
              />
            </PreviewBlock>

            <PreviewBlock header="custom Multiselect">

            {/* Customized Multiselect, Refer theme.scss */}
              <MultiSelect
                options={options}
                theme={componentTheme}
              />
            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss

    :local(.select) {
      :local(.border-animation) {
        &::after {
            background-color: #3b2c85 !important;
        }
      }
    }
    
    :local(.option) {
      &:hover {
        background-color: rgba($color: #0b409c, $alpha: 0.4) !important;
      }
    }
    
    :local(.selected) {
      div {
        background-color: #f0ece2;
        div {
          background-color: #f0ece2;
        }
      }
    }
    
    :local(.selected-option) {
      background-color: #0b409c;
      color: #fff;
    }
  `,
};