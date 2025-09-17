(() => {
  'use strict';

  const nav = document.getElementById('navbar');
  if (!nav) return;

  // 모바일/터치 환경만 토글 동작 (데스크톱은 기존 hover 유지)
  const isTouchLike =
    ('ontouchstart' in window) ||
    window.matchMedia('(hover: none), (pointer: coarse)').matches;

  const parents = nav.querySelectorAll('.has-dd');

  // 바깥 누르면 모두 닫기
  const closeAll = () => {
    parents.forEach(li => {
      li.classList.remove('open');
      const t = li.querySelector(':scope > .dd-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  };

  parents.forEach(li => {
    const trigger  = li.querySelector(':scope > .dd-trigger');   // 상위 버튼
    const dropdown = li.querySelector(':scope > .dropdown');
    if (!trigger || !dropdown) return;

    trigger.setAttribute('aria-expanded', 'false');

    if (isTouchLike) {
      // 모바일: 첫 탭은 펼치기/닫기만 (이동 없음)
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const open = li.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');

        // 다른 드롭다운 닫기
        if (open) {
          parents.forEach(other => {
            if (other !== li) {
              other.classList.remove('open');
              const t = other.querySelector(':scope > .dd-trigger');
              if (t) t.setAttribute('aria-expanded', 'false');
            }
          });
        }
      }, { passive: false });
    }
  });

  document.addEventListener('pointerdown', (e) => {
    if (!nav.contains(e.target)) closeAll();
  }, { passive: true });
})();
