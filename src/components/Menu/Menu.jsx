import { Outlet } from 'react-router-dom';
import {
  MenuContainer,
  MenuSection,
  SectionTitle,
  Nav,
  MenuList,
  MenuItem,
  AnimatedNavLink,
  MenuText,
  OutletContainer,
  PlaceholderSection,
  PlaceholderText,
} from './MenuStyled';

const Menu = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // Конфігурація меню по секціях
  const menuSections = [
    // ✅ СЕКЦІЯ 1: Тварини
    {
      title: 'Тварини',
      items: [
        { to: '/birds', label: 'Birds', variant: 'birds', delay: '0s' },
        { to: '/wild', label: 'Wild Animals', variant: 'wild', delay: '0.2s' },
        {
          to: '/domestic',
          label: 'Domestic Animals',
          variant: 'domestic',
          delay: '0.4s',
        },
        { to: '/seaanim', label: 'Sea Animals', variant: 'sea', delay: '0.6s' },
        { to: '/fish', label: 'Fish', variant: 'fish', delay: '0.8s' },
        { to: '/pets', label: 'Pets', variant: 'pets', delay: '1s' },
        { to: '/cats', label: 'Wild Cats', variant: 'cats', delay: '1.2s' },
        { to: '/insects', label: 'Insects', variant: 'insects', delay: '1.4s' },
        {
          to: '/myth',
          label: 'Mythical Creatures',
          variant: 'myth',
          delay: '1.6s',
        },
        { to: '/dinos', label: 'Dinosaurs', variant: 'dinos', delay: '1.8s' },
        {
          to: '/micro',
          label: 'Microorganisms',
          variant: 'micro',
          delay: '2s',
        },
        {
          to: '/group',
          label: 'Groups of Animals',
          variant: 'group',
          delay: '2.2s',
        },
        {
          to: '/words',
          label: 'Animals Words',
          variant: 'words',
          delay: '2.4s',
        },
        {
          to: '/parts',
          label: 'Animal Parts',
          variant: 'parts',
          delay: '2.6s',
        },
        {
          to: '/sounds',
          label: 'Animal Sounds',
          variant: 'sounds',
          delay: '2.8s',
        },
      ],
    },

    // ✅ СЕКЦІЯ 2: Водний світ
    {
      title: 'upcoming topic',
      items: [
        // { to: '/fish', label: 'Fish', variant: 'fish', delay: '0s' },
        // Додайте сюди нові пункти:
        // { to: '/sea-creatures', label: 'Sea Creatures', variant: 'fish', delay: '0.1s' },
        // { to: '/ocean-life', label: 'Ocean Life', variant: 'fish', delay: '0.2s' },
      ],
      placeholder: 'Скоро буде доступно...',
    },

    // ✅ СЕКЦІЯ 3: Комахи і плазуни
    // {
    //   title: 'Комахи і плазуни',
    //   items: [
    //     // { to: '/insects', label: 'Insects', variant: 'insects', delay: '0s' },
    //     // Додайте сюди нові пункти:
    //     // { to: '/reptiles', label: 'Reptiles', variant: 'reptiles', delay: '0.1s' },
    //     // { to: '/amphibians', label: 'Amphibians', variant: 'reptiles', delay: '0.2s' },
    //   ],
    //   placeholder: 'Скоро буде доступно...',
    // },

    // ✅ СЕКЦІЯ 4: Рослини і природа
    // {
    //   title: 'upcoming topic',
    //   items: [
    //     // Додайте сюди нові пункти:
    //     // { to: '/flowers', label: 'Flowers', variant: 'birds', delay: '0s' },
    //     // { to: '/trees', label: 'Trees', variant: 'wild', delay: '0.1s' },
    //     // { to: '/plants', label: 'Plants', variant: 'insects', delay: '0.2s' },
    //   ],
    //   placeholder: 'Скоро буде доступно...',
    // },

    // ✅ СЕКЦІЯ 5: Їжа і напої
    // {
    //   title: 'upcoming topic',
    //   items: [
    //     // Додайте сюди нові пункти:
    //     // { to: '/fruits', label: 'Fruits', variant: 'fish', delay: '0s' },
    //     // { to: '/vegetables', label: 'Vegetables', variant: 'insects', delay: '0.1s' },
    //     // { to: '/drinks', label: 'Drinks', variant: 'birds', delay: '0.2s' },
    //   ],
    //   placeholder: 'Скоро буде доступно...',
    // },

    // ✅ СЕКЦІЯ 6: Транспорт
    // {
    //   title: 'upcoming topic',
    //   items: [
    //     // { to: '/cars', label: 'Cars', variant: 'fish', delay: '0s' },
    //     // { to: '/planes', label: 'Planes', variant: 'birds', delay: '0.1s' },
    //     // { to: '/ships', label: 'Ships', variant: 'wild', delay: '0.2s' },
    //   ],
    //   placeholder: 'Скоро буде доступно...',
    // },

    // ✅ СЕКЦІЯ 7: Транспорт
    // {
    //   title: 'upcoming topic',
    //   items: [
    //     // { to: '/cars', label: 'Cars', variant: 'fish', delay: '0s' },
    //     // { to: '/planes', label: 'Planes', variant: 'birds', delay: '0.2s' },
    //     // { to: '/ships', label: 'Ships', variant: 'wild', delay: '0.4s' },
    //   ],
    //   placeholder: 'Скоро буде доступно...',
    // },

    // ✅ СЕКЦІЯ 8: Транспорт
    // {
    //   title: 'upcoming topic',
    //   items: [
    //     // { to: '/cars', label: 'Cars', variant: 'fish', delay: '0s' },
    //     // { to: '/planes', label: 'Planes', variant: 'birds', delay: '0.2s' },
    //     // { to: '/ships', label: 'Ships', variant: 'wild', delay: '0.4s' },
    //   ],
    //   placeholder: 'Скоро буде доступно...',
    // },
  ];

  return (
    <>
      <MenuContainer>
        {menuSections.map((section, index) => {
          // Якщо секція порожня або має placeholder
          if (!section.items || section.items.length === 0) {
            return (
              <PlaceholderSection key={`section-${index}`}>
                <div>
                  <SectionTitle
                    style={{ borderBottom: 'none', marginBottom: '0.5rem' }}
                  >
                    {section.title}
                  </SectionTitle>
                  <PlaceholderText>
                    {section.placeholder || 'Додайте нові категорії тут...'}
                  </PlaceholderText>
                </div>
              </PlaceholderSection>
            );
          }

          // Звичайна секція з меню
          return (
            <MenuSection key={`section-${index}`}>
              <SectionTitle>{section.title}</SectionTitle>
              <Nav role="navigation">
                <MenuList>
                  {section.items.map(item => (
                    <MenuItem key={item.to}>
                      <AnimatedNavLink
                        to={item.to}
                        $variant={item.variant}
                        $delay={item.delay}
                        onClick={scrollToTop}
                      >
                        <MenuText>{item.label}</MenuText>
                      </AnimatedNavLink>
                    </MenuItem>
                  ))}
                </MenuList>
              </Nav>
            </MenuSection>
          );
        })}
      </MenuContainer>

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default Menu;
