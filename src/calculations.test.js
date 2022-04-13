import { calculateBiorhythms } from "./calculations";
it('calculates the biorhythm', () => {
    const {physical} = calculateBiorhythms('2000-02-01', '2022-04-12');
    expect(physical).toBeCloseTo(0.3984);
});

it('calculates the biorhythm', () => {
    const {emotional} = calculateBiorhythms('2000-02-01', '2022-04-12');
    expect(emotional).toBeCloseTo(0.0000);
});

it('calculates the biorhythm', () => {
    const {intellectual} = calculateBiorhythms('2000-02-01', '2022-04-12');
    expect(intellectual).toBeCloseTo(-0.7557);
});