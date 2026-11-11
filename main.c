#include <stdio.h>
int main(void) {
    double kwh, current_rate, alternative_rate, annual_fee, reduction;
    puts("Energy Cost Planner (EUR)");
    puts("Enter annual kWh, current EUR/kWh, alternative EUR/kWh, annual fee EUR, reduction percent:");
    if (scanf("%lf %lf %lf %lf %lf", &kwh, &current_rate, &alternative_rate, &annual_fee, &reduction) != 5 || kwh < 0 || current_rate < 0 || alternative_rate < 0 || annual_fee < 0 || reduction < 0 || reduction > 100) {
        fputs("Invalid input\n", stderr); return 1;
    }
    double before = kwh * current_rate + annual_fee;
    double after = kwh * (1.0 - reduction / 100.0) * alternative_rate + annual_fee;
    printf("Current: EUR %.2f\nAlternative: EUR %.2f\nDifference: EUR %.2f\n", before, after, before - after);
    return 0;
}
