// Triple Phytagoras.cpp : This file contains the 'main' function. Program execution begins and ends there.

#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    int quadrate_a, quadrate_b, quadrate_c;
    int quadrate_bc;

    string choice;

    cout << "Tripel Pythagoras\n\n";
    cout << "rumus:\n\n";
    cout << "siku-siku\na^2 = b^2 + c^2\n\n";
    cout << "lancip\na^2 < b^2 + c^2\n\n";
    cout << "tumpul\na^2 > b^2 + c^2\n\n";

    cout << "a = ";
    cin >> a;

    cout << "b = ";
    cin >> b;

    cout << "c = ";
    cin >> c;
    cout << endl;

    quadrate_a = a * a;
    quadrate_b = b * b;
    quadrate_c = c * c;

    quadrate_bc = quadrate_b + quadrate_c;

    if (a < b || a < c)
    {
        cout << endl << "variabel a harus lebih besar dari pada variabel b dan c\n\n";
    }
    else {
        cout << "a = " << a << "^2" << endl;
        cout << "b = " << b << "^2" << endl;
        cout << "c = " << c << "^2" << endl << endl;
        cout << "a^2 = " << a << "^2 = " << quadrate_a << endl;
        cout << "b^2 + c^2 = " << b << "^2 + " << c << "^2 = " << quadrate_b << "+" << quadrate_c << " = " << quadrate_bc << endl << endl;

        if (quadrate_a == quadrate_bc)
        {
            cout << "a = b + c\n";
            cout << quadrate_a << " = " << quadrate_b << " + " << quadrate_c << "\n\n";

            cout << "Segitiga siku-siku\n\n";
        }
        else if (quadrate_a < quadrate_bc)
        {
            cout << "a < b + c\n";
            cout << quadrate_a << " < " << quadrate_b << " + " << quadrate_c << "\n\n";

            cout << "Segitiga lancip\n\n";
        }
        else if (quadrate_a > quadrate_bc)
        {
            cout << "a > b + c\n";
            cout << quadrate_a << " > " << quadrate_b << " + " << quadrate_c << "\n\n";

            cout << "Segitiga Tumpul\n\n";
        }
    }

    cout << "Ulangi?\n";
    cout << "[Iya]     [Tidak]\n";
    cin >> choice;

    if (choice == "Iya")
    {
        cout << endl;
        main();
    }
}