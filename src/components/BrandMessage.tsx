export function BrandMessage() {
  return (
    <section
      id="about"
      className="border-b-2 border-ink bg-ink text-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5">
        <p className="font-bebas tracking-[0.4em] text-xs sm:text-sm text-mute">
          / ABOUT
        </p>
        <div className="mt-8 space-y-8 font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.6]">
          <p>
            古いモノや概念はいつの時代も新しい時代の到来によって
            その場所を追われ、アップデートされたり、価値を失ったりしていく。
          </p>
          <p>
            しかし、昨今の急激なIT化の流れは概念のアップデートを待たずに新たなモノや概念を生み出し、
            それぞれの立ち位置が決まらないうちにまた新たなモノが生まれるというサイクルを繰り返している。
          </p>
          <p className="text-fintech">
            Newなモノと Retroなモノが共存する時代を表現するブランド、はじめました。
          </p>
        </div>
      </div>
    </section>
  );
}
