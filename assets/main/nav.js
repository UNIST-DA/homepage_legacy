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
(() => {
  'use strict';

  const nav = document.getElementById('navbar');
  if (!nav) return;

  // 터치 환경에서만 동작 (데스크톱은 기존 hover 유지)
  const isTouchLike = ('ontouchstart' in window) ||
    window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (!isTouchLike) return;

  const parents = Array.from(nav.querySelectorAll('.has-dd'));

  // 유틸: 전부 닫기
  function closeAll() {
    parents.forEach(li => li.classList.remove('open'));
  }

  // 캡처 단계에서 첫 탭 네비게이션 차단 → 펼치기만
  function getTrigger(el) { return el && el.closest('.has-dd > a'); }
  function getParentLI(el) { return el && el.closest('.has-dd'); }

  // 첫 탭: 무조건 펼치기(이동 금지), 두 번째 탭: 이동 허용
  document.addEventListener('pointerdown', (e) => {
    const a = getTrigger(e.target);
    if (!a) return;
    const li = getParentLI(a);
    if (!li) return;

    if (!li.classList.contains('open')) {
      e.preventDefault();
      e.stopPropagation();
      closeAll();
      li.classList.add('open');
    }
    // 이미 open이면 pointerdown은 통과 → click에서 이동
  }, { capture: true, passive: false });

  // click 단계 보호막 (혹시 pointerdown을 못 막은 경우 대비)
  document.addEventListener('click', (e) => {
    const a = getTrigger(e.target);
    if (!a) return;
    const li = getParentLI(a);
    if (!li) return;

    if (!li.classList.contains('open')) {
      // 닫혀있으면 한 번 더 안전하게 펼치기만
      e.preventDefault();
      e.stopPropagation();
      closeAll();
      li.classList.add('open');
    } // 열려있으면 이번 click은 그대로 이동 허용
  }, { capture: true, passive: false });

  // 드롭다운 안의 항목 누르면 닫기 (시각 정리)
  parents.forEach(li => {
    const dd = li.querySelector(':scope > .dropdown');
    if (dd) dd.addEventListener('click', () => closeAll());
  });

  // 바깥 누르면 닫기
  document.addEventListener('pointerdown', (e) => {
    if (!nav.contains(e.target)) closeAll();
  }, { passive: true });
})();
