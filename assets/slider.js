function initSlider(sliderSelector, slidesSelector) {
    const slider = $(sliderSelector);
    const slides = $(slidesSelector).each(() => {console.log});
}

initSlider("#collection-slider__karhu", ".collection-slider__item");
