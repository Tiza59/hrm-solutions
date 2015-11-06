callback({
  "levelNumber": 41,
  "size": 20,
  "steps": 476,
  "successRatio": 0.35,
  "author": "polarathene",
  "hash": "2cb6aa12ece027cafeac4bb70e906d60",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 20/34 - SPEED 689/714 --\n\na:\nb:\n    BUMPUP   24\n    INBOX   \n    JUMPZ    d\n    COPYTO   [24]\n    JUMP     a\n    COMMENT  1\nc:\n    COPYFROM [19]\n    OUTBOX  \n    COPYFROM [24]\n    COPYTO   [19]\n    COMMENT  2\nd:\n    BUMPDN   24\n    JUMPZ    b\n    COPYTO   23\n    COMMENT  0\ne:\n    COPYFROM 23\n    COPYTO   19\nf:\n    BUMPDN   23\n    JUMPZ    c\n    COPYFROM [23]\n    SUB      [19]\n    JUMPN    e\n    JUMP     f\n\n\nDEFINE COMMENT 0\neJyzZ2BgyBGbbcMtrlV6TjRxMwOYf9zSXeKaRY3SKuu3ugkOIDFTyab8crmm/BmaliUgvqKFZ9AfS+H2\nP5b5m0D8Lh/xHdY+iZvF/Ob2pfoFJDH718RnBYUVacWlHz4RZ32MNaHs0MREjWkPEnVCQOolCyb7shdO\nzGMvZDgF4lfn/3JjL3ztHl0aEfimSiU1tTasaFFddmNwXeHErbVvZ/pVHV/DXvjxFFNu7mX17ICrID07\nzy3Wdr2ww+rixb3ZRhfjrky5oHJjyoV198PP770XdLrmEkhNwrG92T8PddRr7zGbCuIvvlNcsO5J4UT1\n51wzGEbBKBgFDACEg2JI;\n\nDEFINE COMMENT 1\neJxLYGBgeCjy2p1NWHJ6qDDTSgPRa6tvyPZuuKAmvkNI59dOoDRDjph0mai8ZQmIHSqs5jJRJMhRSGeV\nNYif67otOsMxtdDS+kbXWkvXKSbmB+eAxJ+YPYrgtzydFeq0ZJ6Bi+1SkFiQf6n/MV/BFSD2Fr9fbmcC\nnZ1mRpg4b4z+5aYV1+J3Iu5KZGVcTbxtrErqt2CtUpC6sux/5ZfTHlTKJk+vc0o0aF2ccKNrccLbmfpJ\nFQufpn5e6ZO5al1mQf4mz7Kda1vLBVeoVLydaVbe37+08HD13bxLVSAzJtQfjXKo/55e25DdWNvwdiZI\nTK+h1H9qc3pAe8fH8J4eldQ7PfNzr3Volca28ZS7NS+r3d/6tYOx23UKW3/UYpB67smeQTXzrIPNl032\nBfFTZlsHi87eFh00x76FaY7eMpAYx/kgR9cLDOFTLry8vfD0zAtXjkQcAYlPP6xVemoPS0fArpPdIH76\n7fm5OfeX1So9/trBMApGwQADAIfwl7k;\n\nDEFINE COMMENT 2\neJxbyMDAYMFzQ9yCJ8rAmONW5n7OvdnXePZm1yhplQKlGAosMvXPGkcZsBgKmt7Sc3a6pbfQR9xAJyTb\nZGasiK1K6hcnlVQDl7hEOdejUdxudzzkXK9Z9Npn6vNbbtK6ZL5YG2RGery34byYKIOZEausecPvePwO\n/xhuHpmboBVXXLA7ubggLmN+rnr2rczA3Jp4uzz+sPe5k31TckycO7Nm2zglluudiJuqAzLnTAOLqF5D\niIJDvXsxiP+taSlXaL+B0J5JN8SfTQlRmD5lkxZbP5PZ/O4dVgWtO6xAanLElsyrFz0456RgxcKX3Imb\n13Dt3xvLNfPCby7Ha9d4ztydKML76obsv1cgtWeNvZd063kvUdEWXPFLY/b61Rom235plB06rB135Zbe\nmbtnjZse8VsueHDdmu2WiO3MCyK2OsfVbMoOqdls2FdgsXPtLhO9ZbeA+kFmebg/fNPqEXC11WPDviJP\n8R3rvX7tvOmjc1zML+5Kf8DEhxzBls9dQyyf84avuz8zouxQUvTTVYej3s4E6X2a6r3kclrQFq4UrRcg\n/t+MioU7CnauXVV6Z/fV8oCrM8rO3HUpsny+IPfhm8tp0z+C1CxvOr7mW1PdxuC6sKfBdZfegsTedddt\njJrcu+HDnGurQfyWqRw7ZSd1fAKx25b1bpi59PFpo0XuzyYvtP8OEuvdfW7Pq22L9sdtTT88ddOK81wb\nFzxYsTHs6dNNvK/Wbt36nnFX1eel+7K/yB3c+n7VobCnPw+x3eI+dOVM2L4N++x2v94FMoPjfMxX1wvZ\nXxQuab1ov8pwqv3q9nNJ19fdr7z171X67Ydvcu4/fKP0WPrl3ycTH954lntZ5EXFQoZRMKAAAHqdJ0w;\n\nDEFINE LABEL 19\neJyzY2Bg4HabbXPdusc228TEOVGnxe+Fpmzoao0VMZ6aNfGfDF9m/LGULlOzWVZ71Ea4/br13L5dJm0L\n/HSPr2lUS9wM1M7g4T57fYJX24JUP+kyjuAWv8bQmbH7wrIbf4fHNKlGNeX7x6QHVMaZOIckmDg7JYq7\nRqbohDxNFU27nKbYdjlNfjnIjEdF4juiS+WXzyjjmjG3SidErNbZKbgu335Cfb59duNZzyfNRil8bSGT\n2zt+7QSp96tqmLC/9XkniB00J99+82xnp5TZ/8p9Z3xeaTXz2uq8xddWO66bvR4kv3TfbJsv+6oa2PYx\nrTx+8vPKeTd2rmUYBaNgFIABAGt/Zu8;\n\nDEFINE LABEL 23\neJwTZACCmLgrJ+Ksj31OyN+0ImVZ7bqM9ICybDWXzTmPIsIKhdvfVNVcEqtluxVc9/J2bUPA1ZftQVt6\nep53Ppzg7NQyNUSBYRSMglEwZAEAYrwgmw;\n\nDEFINE LABEL 24\neJxTY2Bg4FCxNfqqMtvGRTWsSFfJe8ldxbqN4SqJmwPsEjcDpRkcAs56lvuGTH7t/Xmltc/OtU6JO9eC\nxDmC92a/iLiVuTGaLR3EX+g/28Y/Rs9YNtnWCMS/mye/XLJgd09mwa1MyQKG8MDcNt3MAiazhmJnp65q\n9+JdjYUT97e2LZjV7r1EuEtv2bvujvo7PRGBof331BmoDD6tzb0Mom/fXOhz7ep+r6xzLX5ip65EPjvs\nXuy8f27fl32S0533ey/ZczBxs/WJo2fvnRG9OeXCmbsWV/feq7ylcuPpw4+nZj8tO3T31c611a8Pznn/\nUrGt8HFXnPtD2VCJ22ou1HbvKBgF9AIAz9tx3A;\n\n"
});