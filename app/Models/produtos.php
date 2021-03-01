<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produtos extends Model
{
    use HasFactory;
    
    protected $table = 'produtos';
    
    protected $fillable = [
        'id',
        'nome_produto',
        'estoque',
        'preco',
        'cod_marca',
        'cod_cat'
    ];


    public function marca()
    {
        return $this->hasOne(marcas::class,'id', 'cod_marca');
    }


    public function categoria()
    {
        return $this->hasOne(categorias::class,'id', 'cod_cat');
    }
}

